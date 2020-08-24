const getImagesList = async () => {
  let result = await fetch('https://boiling-refuge-66454.herokuapp.com/images');
  return await result.json();
};

const getSingleImages = async (imagesId) => {
  let result = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${imagesId}`);
  return await result.json();
};


const addNewComment = async (body) => {
  let result = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/:${body.imagesId}/comments`,{
    method: 'POST',
    body: JSON.stringify(body.comment),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await result.json();
};

export {
  getImagesList,
  getSingleImages,
  addNewComment
}
