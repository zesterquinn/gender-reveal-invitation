import Image from 'next/image'
import Head from 'next/head';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className={'flex justify-center  min-h-screen flex-col mb-0 md:mb-16'}>
        <div className={'font-sensei-medium md:text-9xl text-7xl text-center self-center text-[#ffd31b] mb-10'}>
          <div>OUR</div>
          <div>LITTLE DUCK</div>
          <div>IS ABOUT TO</div>
          <div>ARRIVE</div>
        </div>
        <div className={'font-leagues-spartan md:text-3xl text-xl text-center self-center text-white tracking-[.15em] mb-10'}>
          <div>
            GENDER REVEAL PARTY
          </div>
          <div>
            AND BABY SHOWER
          </div>
        </div>
        <div className={'font-sensei-medium md:text-3xl text-xl text-center self-center text-white tracking-[.15em] mb-5'}>
          <div>SAT | AUG 12 , 2023 @ 2PM</div>
          <div className={'text-[#192e75]'}>
            JOLLIBEE M.LOGARTA AVE, MANDAUE CITY
          </div>
        </div>
        <div className={'font-spring md:text-xl text-lg text-white text-center self-center'}>
          parking is available in front or at Petron gasoline
          station beside the establishment
        </div>
      </section>
      <div className="bg-contain bg-repeat-space bg-center p-20" style={{"backgroundImage": "url(logos/Duck.png)"}}>
      </div>
      <section className={'flex justify-center  min-h-screen flex-col py-20'}>
        <div className={'font-sensei-medium md:text-9xl text-7xl text-center self-center text-[#ffd31b] mb-5'}>
          <div>GIFT IDEAS</div>
        </div>
        <div className={'font-sensei-medium text-3xl text-center self-center text-white tracking-[.15em] mb-10'}>
          <div>
            NEUTRAL COLORS WILL DO BUT ANY COLOR IS UP TO YOU!
          </div>
        </div>
       <div className={'flex self-center'}>
         <div className={'grid grid-cols-3  md:gap-x-20 gap-x-4 uppercase'}>
           <div className={'flex items-center flex-col'}>
             <Image src={'/logos/Baby-Essentials.png'} alt={'Baby-Essentials'} width={125} height={125}/>
             <div className={'font-leagues-spartan md:text-xl text-sm text-center self-center text-white tracking-[.15em]'}>
               <div>Baby Bath <br/> Essentials</div>
             </div>
           </div>
           <div className={'flex items-center flex-col'}>
             <Image src={'/logos/Newborn-Clothes.png'} alt={'Newborn-Clothes'} width={125} height={125}/>
             <div className={'font-leagues-spartan md:text-xl text-sm text-center self-center text-white tracking-[.15em]'}>
               <div>Baby <br/> Clothing</div>
             </div>
           </div>
           <div className={'flex items-center flex-col'}>
             <Image src={'/logos/Baby-Comforter-Set.png'} alt={'Baby-Comforter'} width={125} height={125}/>
             <div className={'font-leagues-spartan md:text-xl text-sm text-center self-center text-white tracking-[.15em]'}>
               <div>Baby <br/> Comforter Set</div>
             </div>
           </div>
           <div className={'flex items-center flex-col'}>
             <Image src={'/logos/Baby-Bottles.png'} alt={'Baby-Bottles'} width={125} height={125}/>
             <div className={'font-leagues-spartan md:text-xl text-sm text-center self-center text-white tracking-[.15em]'}>
               <div>Baby <br/> Bottles</div>
             </div>
           </div>
           <div className={'flex items-center flex-col'}>
             <Image src={'/logos/Baby-Diaper.png'} alt={'Baby-Diaper'} width={125} height={125}/>
             <div className={'font-leagues-spartan md:text-xl text-sm text-center self-center text-white tracking-[.15em]'}>
               <div>Baby <br/> Diaper</div>
             </div>
           </div>
           <div className={'flex items-center flex-col'}>
             <Image src={'/logos/Baby-Wipes.png'} alt={'Baby-Wipes'} width={125} height={125}/>
             <div className={'font-leagues-spartan md:text-xl text-sm text-center self-center text-white tracking-[.15em]'}>
               <div>Baby <br/> Wipes</div>
             </div>
           </div>
         </div>
       </div>
        <div className={'flex self-center mb-10 uppercase'}>
          <div className={'flex items-center flex-col mr-0 md:mr-10'}>
            <Image src={'/logos/toy.png'} alt={'toy'} width={125} height={125}/>
            <div className={'font-leagues-spartan md:text-xl text-sm text-center self-center text-white tracking-[.15em]'}>
              <div>Baby <br/> Toys/Books</div>
            </div>
          </div>
          <div className={'flex items-center flex-col'}>
            <Image src={'/logos/PS5.png'} alt={'PS5'} width={235} height={0}/>
            <div className={'font-leagues-spartan md:text-xl text-sm text-center self-center text-white tracking-[.15em]'}>
              <div>PS5 <br/> (Request ni Zester)</div>
            </div>
          </div>
        </div>
        <div className={'font-spring md:text-xl text-md text-white text-center self-center min-w-min'}>
          YOUR LOVE, PRAYER AND PRESENCE IS ALL WE REQUEST BUT IF YOU DESIRE TO GIVE...  <br/> HERE ARE SOME GIFT IDEAS YOU MIGHT WANT TO START WITH.
        </div>
      </section>
     <div className={'pb-10'}>
       <div className="bg-contain bg-repeat-space bg-center p-20 mb-16" style={{"backgroundImage": "url(logos/Duck.png)"}}>
       </div>
     </div>
      <section className={'flex justify-center  min-h-screen flex-col'}>
        <div className={'font-sensei-medium md:text-9xl text-6xl text-center self-center text-[#ffd31b] mb-5'}>
          <div>IF YOU ARE...</div>
        </div>
        <div className={'font-sensei-medium md:text-9xl text-6xl text-center self-center text-[#1a2d75] mb-10'}>
          <div className={'flex items-center justify-center'}>
            <Image src={'/logos/team-boy-new.png'} alt={'team-boy-new'} width={150} height={150}/>
          </div>
          <div>TEAM BOY</div>
          <div className={'font-spring md:text-xl text-lg text-white'}>
            IF YOU CAN, PLEASE WEAR BLUE
          </div>
        </div>
        <div className={'font-sensei-medium md:text-9xl text-6xl text-center self-center text-[#f77da4] mb-5'}>
          <div className={'flex items-center justify-center'}>
            <Image src={'/logos/Team-Girl.png'} alt={'Team-Girl'} width={150} height={150}/>
          </div>
          <div>TEAM GIRL</div>
          <div className={'font-spring md:text-xl text-lg text-white'}>
            IF YOU CAN, PLEASE WEAR PINK
          </div>
        </div>
        <div className={'flex self-center -mb-10'}>
          <div className={'flex items-center flex-col'}>
            <a target='_blank' href="https://docs.google.com/forms/d/1LJAeZJgvj3Nf5NkOjj7LrY3j0k1uXSidtXl-epUlReA/edit?ts=64c5174a">
              <Image src={'/logos/rsvp-new.png'} alt={'rsvp-new'} width={300} height={150}/>
            </a>
          </div>
        </div>
        <div className={'font-spring md:text-2xl text-lg text-white text-center self-center min-w-min mb-10'}>
          CLICK ON THE RSVP BUTTON TO CONFIRM YOUR ATTENDANCE
        </div>
      </section>
    </main>
  )
}
