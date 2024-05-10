import Company from "./Company";

const Companies=()=>{
    return(
        <>
        <div className="navigation">
            <p className="heading">Companies</p>
            <div className="search">
            <div class="rounded-lg border border-gray-200 flex items-center px-3.5 w-full max-w-xs h-9">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="mr-3 -translate-y-0.5 text-gray-400 h-4 w-4"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
  <input
    class="flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full h-9 peer"
    placeholder="Search"
    type="search"
  />
</div>
            </div>
        </div>
        <div className="container">
        <Company/>
        <Company/>
        <Company/>
        <Company/>
        <Company/>
        </div>
        </>
        );
    }

export default Companies;