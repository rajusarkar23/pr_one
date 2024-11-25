export default async function AddProductsForm() {
  return (
    <form>
      <div className="flex flex-col items-center">
        <div>
          <label className="flex">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="border px-1"
          />
        </div>
        <div>
          <label className="flex">Description</label>
          <textarea
            name="description"
            id="description"
            cols={22}
            rows={2}
            placeholder="Write a description"
            className="border px-1"
          ></textarea>
        </div>
        <div>
          <label className="flex">Price</label>
          <input type="text" placeholder="Price" className="border px-1" />
        </div>
        <div className="w-48">
          <label className="flex">Image: Upload image</label>
          <input type="file" />
        </div>
      </div>
      <div className="text-center mt-2">
        <button
          type="submit"
          className="bg-blue-500 px-2 py-1 rounded-md text-white hover:bg-blue-600 transition-all"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}
