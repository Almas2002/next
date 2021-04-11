import Link from "next/link";
import A from "../components/A";

export default function Index() {
     return <div>
         <div className='navbar'>
             <A href={'/users'} text={'Пользователи'}/>
             <A href={'/'} text={'Главная страница'}/>
         </div>
         <style jsx>
             {`
             .navbar{
             background:orange;
             padding :15px;
             }
             Link{
             padding:15px;
             }
             `}
         </style>
     </div>
 }