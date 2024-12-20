import {
  Card,
  CardContent,
  } from "@/components/ui/card";
  import Link from "next/link";

export default function Education() {
  {/*my education details*/ }
  const educationDetail = [{
    institution: "Governer House marquee",
    date: "feb 2024 - continue",
    degree: "giaic",
    details: "We learn Typescript,Tailwind and HTML in first quater,in second quater learn Next.js with different libraries like shadcn,daisyui etc...",
  },
  {
    institution: "Karachi university",
    date: "dec 2004",
    degree: "M.A political science",
    details: "",
  },
  {
    institution: "karachi university",
    date: "dec 2002",
    degree: "B.A political science",
    details: "",
  },
  {
    institution: "private",
    date: "1999",
    degree: "F.A",
    details: "",
  },
  {
    institution: "ali ali school",
    date: "1996",
    degree: "matric",
    details: "",
  }]
  return (
    <div>
      <Card className="h-auto min-h-screen p-6 bg-green-100">

                <CardContent>

          <div className="-my-8 divide-y-2 divide-gray-300">
            {educationDetail.map((item, i) => (
              <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-bold title-font text-gray-900 uppercase">
                    {item.degree}
                  </span>
                  <span className="mt-1 text-gray-500 text-sm uppercase">{item.date}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl text-gray-900 title-font mb-2 uppercase font-bold">
                    {item.institution}
                  </h2>
                  <p className="leading-relaxed text-xl">
                    {item.details}          </p>
                </div>
              </div>
            ))}
          </div>

        </CardContent>
        {/* button */}
        <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10">
                                <Link href={"#"}>HOME</Link>
                            </button>


      </Card>

    </div>
  )
}
