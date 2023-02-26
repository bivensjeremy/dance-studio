import { policyData } from "@/app/data/policyData";
import { rockSalt } from "@/app/fonts";

const Policies = () => {
    return (
        <div className="pb-12">
            <h2 className={`${rockSalt.className} text-center text-5xl font-bold`}>
                Policies
            </h2>
            {policyData.map((policy) => (
                <div key={policy.id} className="py-3">
                    <h3 className="font-bold text-lg">{policy.title}</h3>

                    {policy.data.map((point) => (
                        <ul key={point} className="list-disc">
                            <li>
                                {point}
                            </li>
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Policies;