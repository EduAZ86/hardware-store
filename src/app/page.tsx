import { ButtonWithText } from "@/ui/components/common";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow-900">
      <ButtonWithText
        textButton="Hola mundo button color"
        buttonSize="middle"
        buttonVariant="backgroundColor"
      />
        <ButtonWithText
        textButton="Hola mundo button transparent"
        buttonSize="full"
        buttonVariant="transparent"
      />
    </main>
  );
}
