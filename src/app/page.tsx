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
          {/* <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z"/>
  </svg> */}
            <h1 className="text-white font-['Pacifico']  text-xl mb-1 opacity-95">Pacifico</h1>
          </div>
          <div className='border-l-2 border-white border-opacity-15	 pl-3'>
              <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20"  className="fill-white opacity-90">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
          </div>
        </div>
      </div>
    </main>
  )
}
