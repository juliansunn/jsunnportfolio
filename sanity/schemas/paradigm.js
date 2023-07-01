const paradigm = {
  name: "paradigm",
  title: "Paradigm",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};

export default paradigm;
