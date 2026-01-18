import { policyData } from "@/app/data/policyData";
import { Card } from "@heroui/react";

const Policies = () => {
    return (
        <div className="pb-12 space-y-10">
            <h2 className='font-accent text-center text-5xl font-bold'>
                Policies
            </h2>

            {policyData.map((policy) => (
                <Card key={policy.id} className="">
                    <Card.Title className="font-heading text-xl font-semibold">
                        {policy.title}
                    </Card.Title>
                    <Card.Content className="ml-3">
                        <ul className="list-disc list-inside space-y-2 text-foreground/70">
                            {policy.data.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </Card.Content>
                </Card>
            ))}
        </div>
    );
}

export default Policies;