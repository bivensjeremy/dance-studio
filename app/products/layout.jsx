import NavBarProducts from "@/app/components/NavBarProducts";

export default function ProductsLayout({ children }) {
    return (
        <section className="">
            <NavBarProducts />
            <div className="container m-auto w-5/6 md:w-2/3">
                {children}
            </div>
        </section>
    )
}