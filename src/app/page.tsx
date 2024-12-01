import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TabsDemo } from "@/components/ui/tabsDemo";
import { InputForm } from "@/components/InputForm";
import HowToUseAPI4Forms from "@/components/ui/HowToUse";
import { TypewriterEffectDemo } from "@/components/ui/FOOTER";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-60 -top-30 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(100%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-100 to-yellow-500 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur-0 transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            API4FORMS IS MIGRATING TO CLOUD!!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Form <span className="text-yellow-400">Submissions</span> Directly to
          mail box.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          API4FORMS allows you to securely manage form submissions enabling form
          data to be forwarded directly to your email address.{" "}
          <span className="text-yellow-500 font-bold">NO BACKEND REQUIRED</span>
        </p>
        {/* Form Integration */}
        <div className="mt-10 flex justify-center">
          <InputForm /> {/* Include the InputForm component */}
        </div>
        <div className="container mx-auto p-6">
          {/* Use the HowToUseAPI4Forms component here */}
          <HowToUseAPI4Forms />
        </div>
      </MaxWidthWrapper>
      <div className="mt-10">
        <TabsDemo />
      </div>
      <TypewriterEffectDemo />
    </>
  );
}
