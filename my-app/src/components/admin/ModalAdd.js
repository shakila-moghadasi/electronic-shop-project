import React, { useState } from 'react';
import { useRef } from 'react';
import { api } from './Api';


const ModalAdd = () => {
  const [image , setimage] = useState(null);
  const [Title , setTitle] = useState(null);
  const [country , setcountry] = useState(null);
  const [category , setcategory] = useState(null);
  const [categoryindex , setcategoryindex] = useState(null);
  const [type , settype] = useState(null);
  const [price , setprice] = useState(null);
  const [count , setcount] = useState(null);
  const [off , setoff] = useState(null);
  const [commodity , setcommodity] = useState(null);
  const [data , setdata] = useState(null);

  const imgRef = useRef();
  const preview = (file) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      if (imgRef && imgRef.current) imgRef.current.src = e.target?.result;
    };
    fileReader.readAsDataURL(file);
  }

  const changehandler = (e) => {
    setimage(Array.from(e.target.files))
    const files = Array.from(e.target.files);
    preview(files[0])
  }

  const submitHanler = async (e) => {
    e.preventDefault()
    console.log(image);
    let temp = [];
    image.map((item) => {
      const formData = new FormData();
      formData.append("image", item);
      const tempRequest = api.post("/upload", formData);
      temp.push(tempRequest);
    });
    const arrayResponse = await Promise.all(temp);

    await api.post('/products', {
      country: country,
      image: arrayResponse.map((i) => i.data.filename),
      title: Title,
      category: category,
      categoryindex: categoryindex,
      type: type,
      price: price,
      amount: 1,
      count: count,
      off: off,
      commodity: commodity,
      data: data
      // createdAt: new Date(),
    })
  }


  return (
    <form onSubmit={submitHanler}>
      <img alt={"test"} src="" ref={imgRef} height={88} />
      <input type="file" onChange={changehandler}/>
      <br/>
      <label>
        country:
      </label>
      <br/>
      <input type="text" onChange={(e) => setcountry(e.target.value)}/>
      <br/>
      <label>
        title:
      </label>
      <br/>
      <input type="text" onChange={(e) => setTitle(e.target.value)}/>
      <br/>
      <label>
        category:
      </label>
      <br/>
      <input type="text" onChange={(e) => setcategory(e.target.value)}/>
      <br/>
      <label>
        categoryindex:
      </label>
      <br/>
      <input type="text" onChange={(e) => setcategoryindex(e.target.value)}/>
      <br/>
      <label>
        type:
      </label>
      <br/>
      <input type="text" onChange={(e) => settype(e.target.value)}/>
      <br/>
      <label>
        price:
      </label>
      <br/>
      <input type="text" onChange={(e) => setprice(e.target.value)}/>
      <br/>
      <label>
        count:
      </label>
      <br/>
      <input type="text" onChange={(e) => setcount(e.target.value)}/>
      <br/>
      <label>
        off:
      </label>
      <br/>
      <input type="text" onChange={(e) => setoff(e.target.value)}/>
      <br/>
      <label>
        commodity:
      </label>
      <br/>
      <input type="text" onChange={(e) => setcommodity(e.target.value)}/>
      <br/>
      <label>
        data:
      </label>
      <br/>
      <input type="text" onChange={(e) => setdata(e.target.value)}/>
      <br/>
      <button type="submit">Save</button>
    </form>
  )
};

export default ModalAdd;