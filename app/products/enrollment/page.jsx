import AppForm from "@/app/components/AppForm";
import { rockSalt } from "@/app/fonts";


const Enrollment = () => {
    return (
        <div className="m-auto pb-12">
            <h2 className={`${rockSalt.className} text-center text-5xl font-bold`}>
                Enrollment Application
            </h2>

            <AppForm />
        </div>
    );
}

export default Enrollment;