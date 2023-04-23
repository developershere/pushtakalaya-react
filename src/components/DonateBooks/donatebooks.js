import { Link } from 'react-router-dom';
import Header from '../header/header';
import'./donate.css'
function Donate(){
return<>
  <Header/>
  <div className='container-fluid donatecontainer mt-3 '>
   <div className='row'>
   <div className='donatecontain col-md-8 m-auto mt-2'>
    <h4 className='subheading text-center'>Giving Away Books Is Not Just About Making A Donation.</h4>
       <h4 className='subheading text-center'> It Is About Making Difference</h4>
     </div>
     </div>
     <div className='row'>
     <div className='col-md-12 text-center'>
       <Link to='/donateform'> <button className='donatebutton '>Donate Books</button></Link>
     </div>
 </div>
 <div className='row'>
    <div className='donateimg col-md-8 text-center m-auto'>
        <img src='https://media.istockphoto.com/id/1302961248/vector/book-donation-concept-vector-illustration-on-white-background-people-donate-second-hand.jpg?s=612x612&w=0&k=20&c=01c-jPTUTRYVGTbPb_h2HgHkcADjBBpxyxAxYP8MNbs=' alt='donate image'/>
    </div>
 </div>
 <div className='row'>
    <div className='howdonate col-12'>
    <h3 className='text-center subheading mt-1 text-black'>How Does Donation Help</h3>
    </div>
 </div>
 <div className='row border' >
    <div className='col-lg-3 col-md-3 col-sm-3 col-xm-3 mt-3' >
    <img src='https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonate_book_img9resize.9cf5d861.png&w=750&q=75' />
   
        <h6 className='howsubHeading mt-3'>Develop a culture of reading and sharing</h6>
   
    </div>
    <div className='col-lg-3 col-md-3 col-sm-3 col-xm-3 mt-3'>
         <img src='https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonate_book_img10resize.01b69a83.png&w=640&q=75' />
   
        <h6 className='howsubHeading mt-4'>Your old books will get a new life to give life.</h6>
    </div>
    <div className='col-lg-3 col-md-3 col-sm-3 col-xm-3'>
    <img src='img\globe-book.jpg' />
   
   <h6 className='howsubHeading mt-2 '>Your old books will get a new life to give life.</h6>

    </div>
    <div className='col-lg-3 col-md-3 col-sm-3 col-xm-3 mt-2'>
    <img src='https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonate_book_img12resize.65639d6d.png&w=640&q=75' />
   
   <h6 className='howsubHeading mt-4 '>Be the cause of literacy & make the difference the world needs.</h6>
    </div>
 </div>
  <div className='row mt-5 '>
    <div className='col-lg-5 offset-1 donate mb-5'>
        <div>
            <h3 className='text-center subheading '>Why to Donate</h3><hr/>
            <b className='subheading mt-3'>"Knowledge increases by sharing,but not saving"</b>
            <p className=' mt-4'>Books are uniquely portable magic that carries your attached feelings forward.</p>
            <p>Your books can help someone in the same way they did for you.</p>
            <p>We are committed to carrying your emotions with your books and making them grow older!</p>
            <p>Let's become a cause for change & make a difference.</p>
          
            <h3 className='text-center subheading'>Let's Educate Together & Rise Together!</h3>
            <div className='mt-4 text-center mb-2'>
                <img src='https://www.mypustak.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdonate_box.6c15805d.png&w=640&q=75'/>
            </div>
        </div>

    </div>
    <div className='col-lg-5 donate mb-5'>
    <div>
            <h3 className='text-center subheading '>Did You Know ?</h3><hr/>
           
            <p className=' mt-4'>By donating (30 books), you will help to reduce 85kg of carbon-footprint</p>
            <p>A ton of recycled paper saves 17 Trees</p>
            <p>In 1993, U.S. paper recovery saved more than 90,000,000 cubic yards of landfill space. It's our turn in India.</p>
            <p>Some people cannot access books. They can get books at FREE OF COST anywhere across India.</p>
          
            
            <div className='mt-4 text-center'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQT576YPKQwMls79iMLEYOcRUtPKMUvZqp7HKzfKMKNcmjvPblmNKLzomNnWsuLUdCT0&usqp=CAU'/>
            </div>
        </div>
    </div>
  </div>
  <div className='row'>
  <div className='col-md-12 text-center mb-5'>
       <Link to='/donateform'><button className='donatebutton '>Donate your love Books</button></Link> 
     </div>
     </div>

  </div>

</>
}

export default Donate;