// here we imported languages array of objects from my-data module as the functions use it
const { languages } = require('../my-data');

// here we took the function in PUT method in update=delete router and assigned this function to this variable
const updateLanguages = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const lang = languages.find((l) => l.id === Number(id));
  if (!lang) {
    return res.status(404).json({
      success: false,
      msg: `id ${id} is not found`,
    });
  }

  const newList = languages.map((l) => {
    if (l.id === Number(id)) {
      l.language = name;
    }
    return l;
  });

  res.status(200).json({
    success: true,
    data: newList,
  });
};

// here we took the function from DELETE method in update-delete router and assigned it to this variable
const deleteLanguages = (req, res) => {
  const { id } = req.params;

  const lang = languages.find((l) => l.id === Number(id));
  if (!lang) {
    return res.status(404).json({
      success: false,
      msg: `id ${id} is not found`,
    });
  }

  const newList = languages.filter((l) => l.id !== Number(id));
  res.status(200).json({
    success: true,
    data: newList,
  });
};
// we exported the 2 functions
module.exports = {updateLanguages , deleteLanguages};