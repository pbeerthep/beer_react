import { Input, Button } from 'antd';
function Home (){
    return (<>
     <h1>Home page</h1>
     <Input placeholder="Name" disabled={false} size="large" showCount={true} maxLength="5"/>
     <Input placeholder="Surname" disabled={false} size="large" showCount={true} maxLength="5"/>
     <Input placeholder="age" disabled={false} size="large" showCount={true} maxLength="5"/>

     <Button type="primary">Save</Button>
    </>
    );
}

export default Home;