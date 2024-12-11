import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselInst() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            orientation="vertical"
            className="w-full mb-60"
        >
            <CarouselContent className="h-[200px] md:h-[600px] xs:h-[700px]">
                {Array.from({ length: 2 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex items-center justify-center p-6">
                                    <img src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1715180644/IPV/qmxv1kkj7t2iceisbflt.png" className="max-w-full h-auto" alt="slider institucional ipv" />
                                </CardContent>
                                <CardContent className="flex items-center justify-center p-6">
                                    <img src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1715180645/IPV/bdbg7nl5vggntdwn1pnt.png" className="max-w-full h-auto" alt="slider institucional ipv" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
