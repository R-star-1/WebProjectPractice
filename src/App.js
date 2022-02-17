import React  from "react";
import Card from './components/Card';
import Header from "./components/Header";
const App =() =>{
    return (
        <>
            <Header />
            <div className="Card_collections"> 
                <Card image="https://picsum.photos/200"   heading="RandomImage 1"  />
                <Card image="https://picsum.photos/seed/picsum/200"   heading="RandomImage 2"  />
                <Card image="https://picsum.photos/201"   heading="RandomImage 3"  />
                <Card image="https://placekitten.com/200"   heading="RandomImage 4"  />
                <Card image="https://placebear.com/200/200"   heading="RandomImage 5"  />
            </div>
        </>
    );
}
export default App;