

const ItemListContainer = (props) => {
  return (
    <div className="container mt-4">
      <h1 class="bg-danger text-uppercase text-white">{props.greeting}</h1>
    </div>
  );
};

export default ItemListContainer;