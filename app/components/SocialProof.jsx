'use client'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { Card, Avatar } from "@heroui/react";
import { Star } from "lucide-react";

export const reviews = [
  {
    image: "01",
    name: "Jason M.",
    role: "Parent",
    text: "My daughter has grown so much in confidence since joining this studio. The instructors are amazing.",
  },
  {
    image: "02",
    name: "Robin R.",
    role: "Adult Student",
    text: "The classes are fun, challenging, and welcoming. I look forward to every session.",
  },
  {
    image: "03",
    name: "Emily K.",
    role: "Teen Dancer",
    text: "I've made lifelong friends here. The energy is incredible.",
  },
];


export const SocialProof = () => {
    const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000 })]
  );
  
    return(
        <div>
            <h2 className="font-heading text-center text-4xl font-bold">
                What Our Dancers Say
            </h2>

            <div className="flex flex-row justify-center gap-5 pt-4 pb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fill="#F73D93" strokeWidth={0} size={12} />
                ))}
            </div>

            <div className="w-full max-w-5xl mx-auto">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map(({ name, role, text, image }, idx) => (
                            <Card key={idx} className="flex flex-col h-full">
                                <Card.Header className="flex flex-row items-center gap-4 pb-4">
                                    <Avatar className="h-12 w-12 rounded-lg border border-border">
                                        <Avatar.Image
                                            alt={`Avatar ${role}`}
                                            src={`/review_profile_${image}.png`}
                                            className="object-cover"
                                        />
                                        <Avatar.Fallback className="rounded-lg bg-muted">
                                            {name.substring(0, 2).toUpperCase()}
                                        </Avatar.Fallback>
                                    </Avatar>
                
                                    <div className="flex flex-col">
                                        <Card.Title className="font-bold text-sm leading-tight">
                                            {name}
                                        </Card.Title>
                                        <Card.Description className="text-xs text-muted-foreground">
                                            {role}
                                        </Card.Description>
                                    </div>
                                </Card.Header>

                                <Card.Content className="grow">
                                    <p className="text-sm leading-relaxed text-foreground/80 italic">
                                        “{text}”
                                    </p>
                                </Card.Content>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}