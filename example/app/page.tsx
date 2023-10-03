import Image from 'next/image'
'use client'
export default function Home() {
  const handleClick = () => {
    console.log("click"); //print("click")
  };
  return (
    <div>

      <h1 className=" text-lg">This is a Heading</h1>
      <h6>hahahahahah</h6>
      {/* <img src="https://static-content.azuki.com/assets/azuki-og-image.jpg" /> */}
      <a href="https://www.azuki.com"> azuki </a>
      <p>
        Enter something: <input className=' bg-pink-300'/>
        <button onClick={handleClick}>Submit</button>
      </p>
    </div>

  )
}
