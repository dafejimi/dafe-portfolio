import react, {useState} from "react";
import pdfFile from "../assets/Joshua-Olujimi-CV.pdf";
import tokenTrove from "../assets/Tokentrove.jpg"
// import nodemailer from "nodemailer";

const Home = () => {
    const [Name, setName] = useState('')
    const [fromEmail, setFromEmail] = useState('jimijay.oj@gmail.com');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleRecipientEmail = (e) => {
        setRecipientEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSend = () => {
        /**
         * const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: fromEmail,
              pass: 'your-email-password' // Consider using environment variables or a more secure method
            }
          });

        const mailOptions = {
            from: fromEmail,
            to: recipientEmail,
            subject: 'Inquiry',
            text: message
          };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.error(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
         */
        
    }

    return (
        <div className="flex flex-col items-stretch bg-stone-50">
          <div className="flex flex-col justify-center items-stretch w-full bg-sky-200 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-stretch px-20 pt-8 w-full max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84b1fc562f731b828347d50d27c70e7373c6e5e83e917c5d420a68f1ab145757?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="object-center aspect-[0.86] w-[77px]"
              />
              <div className="object-center my-auto aspect-[1.18] fill-sky-400 w-[100px]">
              <a href={pdfFile} download="resume.pdf" onClick={(e) => {e.stopPropagation()}} className="text-cyan-600 text-2xl display-block">Resume</a>

              </div>
            </div>
            <div className="flex flex-col justify-center items-center px-16 py-11 mt-10 w-full bg-white bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="mb-11 w-full max-w-[1184px] max-md:mb-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                  <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center items-stretch py-7 text-base leading-6 text-cyan-600 max-md:mt-10 max-md:max-w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5a4e27b7a47c02ada2d3020d041bcb63ab99590f4b3ffdd132436696944562?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e5a4e27b7a47c02ada2d3020d041bcb63ab99590f4b3ffdd132436696944562?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e5a4e27b7a47c02ada2d3020d041bcb63ab99590f4b3ffdd132436696944562?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e5a4e27b7a47c02ada2d3020d041bcb63ab99590f4b3ffdd132436696944562?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e5a4e27b7a47c02ada2d3020d041bcb63ab99590f4b3ffdd132436696944562?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e5a4e27b7a47c02ada2d3020d041bcb63ab99590f4b3ffdd132436696944562?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e5a4e27b7a47c02ada2d3020d041bcb63ab99590f4b3ffdd132436696944562?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e5a4e27b7a47c02ada2d3020d041bcb63ab99590f4b3ffdd132436696944562?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                        className="object-center items-start self-center max-w-full aspect-[0.94] w-[374px]"
                      />
                      <div className="flex gap-5 justify-between items-stretch py-px mt-10 max-md:flex-wrap max-md:max-w-full">
                        <div className="">
                          Highly skilled at progressive
                          <br />
                          enhancement, design systems &<br />
                          UI Engineering.
                        </div>
                        <div className="text-right">
                          Proven experience building
                          <br />
                          successful products for clients
                          <br />
                          across several countries.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-end mt-8 text-cyan-600 max-md:mt-10 max-md:max-w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebb942909a4ebdae0de04b91f1a93766b5382439efb88ae4fec4fc756caf641f?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                        className="object-center mr-7 aspect-square fill-cyan-600 w-[60px] max-md:mr-2.5"
                      />
                      <div className="mt-16 text-7xl font-black tracking-tighter leading-[77px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                        Blockchain
                        <br />
                        Developer
                      </div>
                      <div className="mt-5 text-xl leading-8 max-md:max-w-full">
                        I like to craft solid and scalable frontend products
                        <br />
                        with great user experiences.
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31fab671759b8cd4c141dc131b5e6b5882e7b92dc04faec23f464eea7d78a267?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                        className="object-center self-start mt-2 aspect-square fill-cyan-600 w-[60px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-stretch pb-12 w-full bg-white max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff86d95960ec5f93b549ac8e8f743e9f7f3361f45126e542f413c84853609a23?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
              className="object-center z-10 self-end mt-0 mr-36 max-w-full aspect-[1.09] fill-cyan-600 w-[145px] max-md:mr-2.5"
            />
            <div className="flex flex-col justify-center items-center px-16 mb-11 w-full max-md:px-5 max-md:mb-10 max-md:max-w-full">
              <div className="w-full max-w-screen-xl max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                  <div className="flex flex-col items-stretch w-[37%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-stretch self-stretch py-px my-auto max-md:mt-10 max-md:max-w-full">
                      <div className="text-6xl font-black tracking-tighter text-sky-400 leading-[70.4px] max-md:max-w-full max-md:text-4xl">
                        Over the Years
                      </div>
                      <div className="mt-4 text-lg leading-7 text-justify text-indigo-700 max-md:max-w-full">
                        I've built products for companies and businesses ranging from simple dapps to complex solutions
                        and enterprise apps with focus on fast, elegant and
                        accessible user experiences. <br />
                        <br />
                        Currently, I work as a freelancer
                        crafting thoughtful and inclusive experiences that adhere to
                        web standards 
                        <br />
.
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col items-stretch ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ad886892abc6fd95ddbbed2a0cb7fdf3eca68fd8dd241d9f8eaf97140785bc6?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                      className="object-center grow w-full aspect-[1.02] max-md:mt-10 max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="self-center mt-40 w-full bg-sky-200 max-w-[1440px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-20 py-12 border-solid border-r-[2.222px] border-r-indigo-700 border-r-opacity-30 max-md:px-5 max-md:max-w-full">
                  <div className="mt-16 text-6xl font-black tracking-tighter text-white leading-[70.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    Architecture
                  </div>{" "}
                  <div className="mt-4 text-lg leading-7 text-purple-950 max-md:max-w-full">
                    Embark on a journey through the intricate realms of blockchain architecture with a seasoned expert at the helm. 
                    <br />
                    Experience the mastery of a seasoned blockchain architect, where innovation meets expertise.
                    <br />
                    Discover the transformative power of various blockchain clients, with Go Ethereum as a notable reference point meticulously harnessed to shape decentralized futures.
                    <br />
                    Explore a portfolio that reflects the passion, precision, and profound understanding of blockchain technology, guiding you towards a decentralized tomorrow.
                    <br />
                    experiences while staying fashionable.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start px-20 py-12 max-md:px-5 max-md:max-w-full">
                  <div className="mt-16 ml-6 text-6xl font-black tracking-tighter text-white leading-[70.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    Engineering
                  </div>
                  <div className="mt-4 ml-6 text-lg leading-7 text-purple-950 max-md:max-w-full">
                  As an accomplished engineer, I navigate the intricate landscape of decentralized systems, leveraging cutting-edge frameworks such as Moralis, Ethers.js, and Web3.js.
                    <br />
                    My work embodies the seamless integration of these powerful tools, ensuring robust and efficient solutions for tomorrow's decentralized applications.
                    <br />
                    Explore my portfolio to witness the engineering prowess that propels the evolution of Web 3.0,<br />
                    where expertise converges with groundbreaking frameworks to shape the digital landscape of the future.
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-center mt-24 w-full bg-cyan-600 min-h-[300px] max-md:mt-10 max-md:max-w-full">
          <div className="z-10 self-center mt-[75px] text-3xl font-extrabold leading-9 text-center text-white whitespace-nowrap max-md:mt-0">
            My Recent Work
          </div>{" "}
          <div className="self-center mt-6 text-lg leading-8 text-center text-sky-400 max-md:max-w-full">
            <span className="text-white">
              Here are a few past design projects I've worked on. Want to see more?{" "}
            </span>
            <span className="text-sky-400"><a href="mailto:email@example.com">Email me</a></span>
            <span className="text-white">.</span>
          </div>
          </div>{" "}
          <a className="object-center self-center mt-20 w-[150px] h-[150px] aspect-[2.17] max-md:mt-10 max-md:max-w-full" href="https://token-trove.netlify.app/">
          <img
            loading="lazy"
            srcSet={tokenTrove}
            
          />
          <div className="object-center self-center text-center text-xl">Token Trove</div>
          </a>
          
          <div className="flex flex-col justify-center items-center px-16 mt-52 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-stretch pb-12 max-w-full w-[768px]">
              <div className="flex flex-col items-stretch self-center px-8 py-px max-w-full text-center w-[534px] max-md:px-5">
                <div className="self-center text-5xl font-bold tracking-tighter text-cyan-600 whitespace-nowrap leading-[66.3px] max-md:text-4xl">
                  Reach Out!
                </div>
                <div className="mt-3.5 text-2xl tracking-wide leading-8 text-purple-950 max-md:max-w-full">
                  Got a question or proposal, or just want
                  <br />
                  to say hello? Go ahead.
                </div>
              </div>
              <div className="flex gap-5 justify-between items-stretch mt-20 text-base leading-5 font-[350] text-purple-950 text-opacity-90 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col flex-1 items-stretch pr-5 whitespace-nowrap">
                  <div className="">Name</div>
                  <input onChange={handleName} type="text" className="px-2 flex flex-col shrink-0 items-start mt-2.5 rounded-lg border border-solid border-slate-300 h-[35px]" />
                </div>
                <div className="flex flex-col flex-1 items-stretch pr-5">
                  <div className="">Email Address</div>
                  <input onChange={handleRecipientEmail} type="text" className="px-2 flex flex-col shrink-0 items-start mt-2.5 rounded-lg border border-solid border-slate-300 h-[35px]" />
                </div>
              </div>
              <div className="mt-12 mr-5 text-base font-light leading-5 text-purple-950 text-opacity-90 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                Message
              </div>
              <input type="text" onChange={handleMessage} className="px-2 flex flex-col items-start mt-2.5 mr-5 max-w-full rounded-lg border border-solid border-slate-300 h-[50px] w-[747px] max-md:mr-2.5" />
              <button onclick={handleSend} className="justify-center items-center self-center px-16 py-6 mt-14 max-w-full text-base font-semibold leading-5 text-violet-700 whitespace-nowrap border-2 border-violet-700 border-solid tracking-[4.64px] w-[380px] max-md:px-5 max-md:mt-10">
                <div className="px-160">
                    SEND
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-20 py-10 mt-40 w-full bg-cyan-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a253c0d8e9bdede92c36cfeaa33a79ad8a2e78e75a2a36d60b16d1d972d91ad?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
              className="object-center aspect-[0.86] w-[77px]"
            />
            <div className="flex flex-col justify-center items-center px-16 mt-12 w-full max-w-[1344px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-stretch">
                <div className="flex flex-col flex-1 justify-center items-center px-3 border border-solid aspect-square border-white border-opacity-50 h-[47px] rounded-[47px]">
                    <a href="https://twitter.com/dafejay">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31006f3725dfc296c3f2b3f20807c7dd4dd86fb40f34762956f3a35842f086c4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                            className="object-center w-full aspect-[1.28]"
                        />
                    </a>   
                </div>
                <div className="flex flex-col flex-1 justify-center items-center px-3 border border-solid aspect-square border-white border-opacity-50 h-[47px] rounded-[47px]">
                    <a href="https://www.linkedin.com/in/olujimi-joshua/">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f068532fd27c1d65f11394612dfbe79b8a2a52f572caf74a1a71087e00076fd8?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                            className="object-center w-full aspect-[1.33]"
                        />
                    </a> 
                </div>
                <div className="flex flex-col flex-1 justify-center items-center px-3 border border-solid aspect-square border-white border-opacity-50 h-[47px] rounded-[47px]">
                    <a href="mailto:email@example.com">
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/861a573280616947d2c0bb2a15554b9959ad30387a09402dc77cceacc8d9bab0?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                        className="object-center w-full aspect-[1.28]"
                        />
                    </a>
                </div>
              </div>
            </div>
            <div className="mt-12 text-2xl leading-7 text-center text-white max-md:mt-10">
              Living, learning, & leveling up
              <br />
              one day at a time.
            </div>
            <div className="flex flex-col justify-center items-center px-16 py-1.5 mt-12 w-full text-center text-white whitespace-nowrap max-w-[1344px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-1 items-stretch">
                <div className="grow text-base leading-7">Handcrafted by me</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/287c5225323006cbd6119fac706690db337b95ca76c09dff05e9e4d6837bc977?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="object-center aspect-square w-[18px]"
                />
                <div className="grow text-lg leading-7">2024</div>
              </div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8260f9222f8c8c1fba65941ab920d1f0b63321e4bda4ebbacb16ffc18e5d0d2e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8260f9222f8c8c1fba65941ab920d1f0b63321e4bda4ebbacb16ffc18e5d0d2e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8260f9222f8c8c1fba65941ab920d1f0b63321e4bda4ebbacb16ffc18e5d0d2e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8260f9222f8c8c1fba65941ab920d1f0b63321e4bda4ebbacb16ffc18e5d0d2e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8260f9222f8c8c1fba65941ab920d1f0b63321e4bda4ebbacb16ffc18e5d0d2e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8260f9222f8c8c1fba65941ab920d1f0b63321e4bda4ebbacb16ffc18e5d0d2e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8260f9222f8c8c1fba65941ab920d1f0b63321e4bda4ebbacb16ffc18e5d0d2e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8260f9222f8c8c1fba65941ab920d1f0b63321e4bda4ebbacb16ffc18e5d0d2e?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
              className="object-center mt-12 max-w-full aspect-[5.56] w-[163px] max-md:mt-10"
            />
          </div>
        </div>
      );
}

export default Home

