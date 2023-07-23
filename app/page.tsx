import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className={'flex justify-center  min-h-screen flex-col'}>
        <div className={'font-sensei-medium text-9xl text-center self-center text-[#ffd31b] mb-10'}>
          <div>OUR</div>

          <div>LITTLE DUCK</div>

          <div>IS ABOUT TO</div>

          <div>ARRIVE</div>
        </div>
        <div className={'font-leagues-spartan text-3xl text-center self-center text-white tracking-[.15em] mb-10'}>
          <div>
            GENDER REVEAL PARTY
          </div>
          <div>
            AND BABY SHOWER
          </div>
        </div>
        <div className={'font-sensei-medium text-3xl text-center self-center text-white tracking-[.15em] mb-5'}>
          <div>SAT | AUG 12 , 2023 @ 2PM</div>
          <div className={'text-[#192e75]'}>
            JOLLIBEE M.LOGARTA AVE, MANDAUE CITY
          </div>
        </div>
        <div className={'font-spring text-xl text-white text-center self-center'}>
          parking is available in front or at Petron gasoline
          station beside the establishment
        </div>
      </section>
    </main>
  )
}
