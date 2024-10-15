import Link from "next/link";

export default function Header () {
    return (
        

<header className="text-gray-600 body-font bg-violet-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        
      </svg>
      <span className="ml-3 text-3xl">INTRO</span>
    </a>


    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      
      <a className="mr-5 hover:text-gray-900"> <Link href = "/"> Home </Link> </a>
      
      <a className="mr-5 hover:text-gray-900"> <Link href = "/my-skills"> Skills </Link> </a>
      
      <a className="mr-5 hover:text-gray-900"> <Link href = "/contact-us"> Contact </Link></a>
      
      
    </nav>

  </div>
</header>
    )
}