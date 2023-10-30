export default function Category() {
  return (
    <div className="px-5 flex flex-shrink-0 flex-col">
      <h1 className="font-Poppins font-bold text-3xl py-5">Category</h1>
      <ul className="space-y-2">
        <li className="font-Montserrat flex">
          <input type="checkbox" className="mr-2" />
          Laptop
        </li>
        <li className="font-Montserrat flex">
          <input type="checkbox" className="mr-2" />
          Desktop Accessories
        </li>
      </ul>
    </div>
  );
}
