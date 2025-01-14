"use client";
import { useForm, useFieldArray } from "react-hook-form";

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      cat: "",
      subCat: [
        {
          section: "",
          questions: [
            {
              question: "",
              answer: "",
              arabic: "",
              transliteration: "",
              translation: "",
              reference: "",
            },
          ],
        },
      ],
    },
  });

  // Field Array for Subcategories
  const {
    fields: subCatFields,
    append: appendSubCat,
    remove: removeSubCat,
  } = useFieldArray({
    control,
    name: "subCat",
  });
  const generateUniqueId = () =>
    `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const onSubmit = (data) => {
    const formattedData = {
      cat: data.cat,
      subCat: data.subCat.map((subCat) => ({
        _id: generateUniqueId(),
        section: subCat.section,
        ...subCat.questions.reduce((acc, question, questionIndex) => {
          acc[`question0${questionIndex + 1}`] = question.question;
          acc[`answer0${questionIndex + 1}`] = question.answer;
          acc[`arabic0${questionIndex + 1}`] = question.arabic;
          acc[`transliteration0${questionIndex + 1}`] =
            question.transliteration;
          acc[`translation0${questionIndex + 1}`] = question.translation;
          acc[`reference0${questionIndex + 1}`] = question.reference;
          return acc;
        }, {}),
      })),
    };

    console.log(formattedData);

    fetch(
      "http://localhost:2025/api/add-dua",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      },
      reset()
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="max-w-7xl mx-auto py-16">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5">
        <div className="flex justify-center">
          <div>
            <label className="block text-green-600 text-center text-xl">
              Add Category
            </label>
            <input
              {...register("cat", { required: true })}
              placeholder="Enter category"
              className="px-5 py-2 border border-[#E2E2E2] rounded-md"
            />
            {errors.cat && (
              <p className="text-sm text-red-600">This field is required</p>
            )}
          </div>
        </div>

        <h3 className="text-green-600 text-xl">Subcategories</h3>
        {subCatFields.map((subCat, subCatIndex) => {
          return (
            <div key={subCat.id} className="mt-4">
              <h4 className="text-red-600">Subcategory {subCatIndex + 1}</h4>
              <div className="grid grid-cols-4 items-center pb-5">
                <div>
                  <label className="block text-[#393939]">Section</label>
                  <input
                    {...register(`subCat.${subCatIndex}.section`, {
                      required: true,
                    })}
                    placeholder="Enter section"
                    className="px-5 py-2 border border-[#E2E2E2] rounded-md"
                  />
                  {errors.subCat && (
                    <p className="text-sm text-red-600">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <SubcategoryQuestions
                subCatIndex={subCatIndex}
                control={control}
                register={register}
                removeQuestion={removeSubCat}
              />
              <button
                type="button"
                onClick={() => removeSubCat(subCatIndex)}
                className="bg-red-600 text-white px-4 py-2 rounded-md mt-4"
              >
                Remove Subcategory
              </button>
            </div>
          );
        })}

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() =>
              appendSubCat({
                section: "",
                questions: [
                  {
                    question: "",
                    answer: "",
                    arabic: "",
                    transliteration: "",
                    translation: "",
                    reference: "",
                  },
                ],
              })
            }
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Add Subcategory
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const SubcategoryQuestions = ({ subCatIndex, control, register }) => {
  // Field Array for Questions inside each Subcategory
  const {
    fields: questionFields,
    append: appendQuestion,
    remove: removeQuestionInternal,
  } = useFieldArray({
    control,
    name: `subCat.${subCatIndex}.questions`, // Dynamically referencing questions in the subcategory
  });

  return (
    <div className="col-span-4">
      {questionFields.map((question, questionIndex) => (
        <div
          key={question.id}
          className="grid grid-cols-4 items-center gap-4 mb-4"
        >
          <div>
            <label className="block text-[#393939]">Question</label>
            <input
              {...register(
                `subCat.${subCatIndex}.questions.${questionIndex}.question`,
                { required: true }
              )}
              placeholder="Enter question"
              className="px-5 py-2 border border-[#E2E2E2] rounded-md"
            />
          </div>
          <div>
            <label className="block text-[#393939]">Answer</label>
            <textarea
              rows={1}
              {...register(
                `subCat.${subCatIndex}.questions.${questionIndex}.answer`,
                { required: true }
              )}
              placeholder="Enter answer"
              className="px-5 py-2 border border-[#E2E2E2] rounded-md"
            />
          </div>
          <div>
            <label className="block text-[#393939]">Arabic</label>
            <textarea
              rows={1}
              {...register(
                `subCat.${subCatIndex}.questions.${questionIndex}.arabic`
              )}
              placeholder="Enter Arabic"
              className="px-5 py-2 border border-[#E2E2E2] rounded-md"
            />
          </div>
          <div>
            <label className="block text-[#393939]">Transliteration</label>
            <textarea
              rows={1}
              {...register(
                `subCat.${subCatIndex}.questions.${questionIndex}.transliteration`
              )}
              placeholder="Enter Transliteration"
              className="px-5 py-2 border border-[#E2E2E2] rounded-md"
            />
          </div>
          <div>
            <label className="block text-[#393939]">Translation</label>
            <textarea
              rows={1}
              {...register(
                `subCat.${subCatIndex}.questions.${questionIndex}.translation`
              )}
              placeholder="Enter Translation"
              className="px-5 py-2 border border-[#E2E2E2] rounded-md"
            />
          </div>
          <div>
            <label className="block text-[#393939]">Reference</label>
            <input
              {...register(
                `subCat.${subCatIndex}.questions.${questionIndex}.reference`,
                { required: true }
              )}
              placeholder="Enter Reference"
              className="px-5 py-2 border border-[#E2E2E2] rounded-md"
            />
          </div>
          <div></div>
          <div>
            <button
              type="button"
              onClick={() => removeQuestionInternal(questionIndex)}
              className="bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Remove Question
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          appendQuestion({
            question: "",
            answer: "",
            arabic: "",
            transliteration: "",
            translation: "",
            reference: "",
          })
        }
        className="bg-green-600 text-white px-4 py-2 rounded-md"
      >
        Add Question
      </button>
    </div>
  );
};

export default Form;
