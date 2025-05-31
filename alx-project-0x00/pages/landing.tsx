import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* Small Buttons */}
      <div className="flex gap-4 mb-2">
        <Button title="Small" styles="text-sm rounded-sm" />
        <Button title="Medium" styles="text-base rounded-md" />
        <Button title="Large" styles="text-lg rounded-full" />
      </div>

    </div>
  )
}
export default Landing