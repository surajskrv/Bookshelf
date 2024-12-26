import { Footer } from "flowbite-react";

const MyFooter = () => {
  return (
    <Footer container className="w-full px-4 lg:px-24 bg-slate-300 text-black">
    <Footer.Copyright href="/" by="Bookshelf™" year={2024} />
    <Footer.LinkGroup>
      <Footer.Link href="/about">About</Footer.Link>
      <Footer.Link href="#">Privacy Policy</Footer.Link>
      <Footer.Link href="#">Licensing</Footer.Link>
      <Footer.Link href="#">Contact</Footer.Link>
    </Footer.LinkGroup>
  </Footer>
  )
}

export default MyFooter