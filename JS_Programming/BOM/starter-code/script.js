//document.getElementsByTagName

// const images=document.getElementsByTagName('img')
 const images1=document.images

// const subheading=document.getElementsByTagName('h2');
// subheading[0].innerText='Valtriix IT Solution Pune!!';
// subheading[1].innerHTML='<i>Valtriix IT Solution Hire Some Full Stack Developer!!</i>';


// const subheadings1=document.getElementsByClassName('subheadings')
// subheadings1[0].innerHTML='Hello Programmer';


//document.getElementById
// const cssimg=document.getElementById('img2')
// document.getElementById('img1').src='new image path copy here!!';


//document.querySelector()
// const para=document.querySelector('.paragraphs')
// const paras=document.querySelectorAll('.paragraphs')
// const images2=document.querySelectorAll('.imageClass')


const imageurl=[
    'image one url link',
    'image two url link',
    'image three url link'
]

// images2[0].src=imageurl[0]
// images2[1].src=imageurl[1]
// images2[2].src=imageurl[2]

// for(let i=0;i<imageurl.length;i++)
// {
//     imageurl[i].src=imageurl[i];
// }

document.querySelectorAll('.imagesclass').forEach((ele)=>
{
    ele.src=images1[index];
})