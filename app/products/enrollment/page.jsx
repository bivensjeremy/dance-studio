import AppForm from "@/app/components/AppForm";
import { SectionHeader } from "@/app/components/SectionHeader";

const Enrollment = () => {
    return (
        <div className="m-auto pb-12">
            <SectionHeader title='Enrollment Application' />

            <AppForm />
        </div>
    );
}

export default Enrollment;