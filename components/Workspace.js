
export const Workspace = () => {
    return (
<div class="flex flex-wrap flex--movie">
    
  <div class="w-full md:w-full lg:w-1/2 max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
    <div class="md:flex-shrink-0">
      <img class="md:w-56"
           src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"
           alt="A Quiet Place movie poster" />
    </div>
    <div class="flex flex-col flex-grow px-8 py-4 bg-color-333">
      <h3 class="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">A Quiet Place</h3>
      <span class="movie--year text-xl lg:text-sm lg:mb-4">2019</span>
      <div class="flex-grow">
        <p class="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">A family is forced to live in silence while hiding from creatures that hunt by sound.</p>
      </div>
      <div class="button-container flex justify-between mb-2">
        <button class="text-lg mr-4 lg:text-sm text-gray-200">More Info</button>
        <button class="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700">Add to List</button>
      </div>
    </div>
  </div>
  </div>
    );
};
