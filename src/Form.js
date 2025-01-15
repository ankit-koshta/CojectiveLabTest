import * as React from "react";

export const Form = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    deadline: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData>>>>", formData);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          value={formData.title}
          name="title"
          label="title"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="title">Description</label>
        <input
          value={formData.description}
          name="description"
          label="description"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="title">Deadline</label>
        <input
          value={formData.deadline}
          name="deadline"
          label="deadline"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="title">Priority</label>
        <input
          value={formData.priority}
          name="priority"
          label="priorty"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};
