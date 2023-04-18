import Card from './Card';

export default function Cards({ characters }) {
   const onClose = () => alert("se cerro la card, ponele");
   return (
      <div>
         {characters.map( ({ id, name, status, gender, origin, image }) => {
            return (
               <Card 
                  key = {id}
                  id = {id}
                  name = {name}
                  status ={status}
                  gender = {gender}
                  origin = {origin.name}
                  image = {image}
                  onCLose = {onClose}
                  // key = {key}
               />);
         })}
      </div>
   );
}
