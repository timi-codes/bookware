import Image from 'next/image'
import Card, { Category } from '@/components/card'
import books from '@/constants/books.json'

export default function Home() {
  return (
    <main className=" items-center justify-center px-28 pt-8 relative">
      <div className='grid grid-cols-[repeat(auto-fill,_minmax(256px,_1fr))]'>
        {
          books.map((book)=>(
            <Card key={book.id} data={{...book, category: Category.parse(book.category)}}/>
          ))
        }
      </div>
      <div className='flex w-full justify-center items-center fixed top-[calc(90vh)]'>
        <div className="flex justify-between	 items-center bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80  h-12 w-72 rounded-full px-4">
          <div className='flex items-center'>
            <h1 className="text-white font-['Pacifico']  text-xl mb-1 opacity-95">Pacifico</h1>
          </div>
          <div className='border-l-2 border-white border-opacity-15	 pl-3'>
            <svg viewBox="0 0 64 64" className='w-4 h-4 hover:opacity-80 cursor-pointer'>
              <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path d="M25 615 l-25 -24 0 -231 0 -231 25 -24 c22 -23 31 -25 124 -25 l100 0 -11 31 c-6 17 -8 59 -5 95 l5 63 -77 3 c-68 3 -76 5 -76 23 0 19 7 20 93 21 87 1 95 2 120 27 l27 27 -112 0 c-86 0 -113 3 -123 15 -10 12 -10 18 0 30 18 21 252 22 273 0 10 -10 26 -12 51 -8 l36 6 0 92 c0 83 -2 94 -23 113 -22 21 -32 22 -201 22 -175 0 -177 0 -201 -25z m210 -110 c0 -18 -8 -20 -69 -23 -72 -3 -93 5 -82 33 5 13 19 15 78 13 65 -3 73 -5 73 -23z"/>
                <path d="M380 338 c-132 -67 -132 -249 0 -316 56 -28 104 -28 160 0 132 67 132 249 0 316 -24 12 -60 22 -80 22 -20 0 -56 -10 -80 -22z m98 -70 c7 -7 12 -22 12 -35 0 -18 6 -23 24 -23 13 0 29 -7 36 -15 17 -20 -3 -45 -36 -45 -19 0 -24 -5 -24 -24 0 -33 -25 -53 -45 -36 -8 7 -15 23 -15 36 0 19 -5 24 -24 24 -33 0 -53 25 -36 45 7 8 23 15 36 15 18 0 24 5 24 23 0 21 16 47 30 47 3 0 11 -5 18 -12z"/>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex justify-between justify-self-end	items-center bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80  h-12 w-12 rounded-full px-4 ml-1.5">
          <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20"  className="fill-white opacity-90 hover:opacity-80">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </div>
      </div>
    </main>
  )
}
