import Data from './Data'

function App() {

  let data = [
    {
        grid : 1,
        name : 'kishana',
        email : 'kishana@gmail.com',
        password : 'kishana@123',
        course : ["html","css","bootstrap"],
        city : "godhra"
    },
    {
        grid : 2,
        name : 'jay',
        email : 'jay@gmail.com',
        password : 'jay@123',
        course : ["photosho","figma","illustrator"],
        city : "dahod"
    },
    {
        grid : 3,
        name : 'mahil',
        email : 'mahil@gmail.com',
        password : 'mahil@123',
        course : ["html","bootstrap","nodejs"],
        city : "junagadh"
    },
    {
        grid : 4,
        name : 'krushi',
        email : 'krushi@gmail.com',
        password : 'krushi@123',
        course : ["html","css","python"],
        city : "jamnagr"
    }

]


   return (
    <>
    <Data explorer={data}/>
    </>
  )
}

export default App
