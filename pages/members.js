import React from 'react';
import PageHeader from "../components/Header/PageHeader";
import IndexNavbar from '../components/Navbar/Navbar';

const Index = () => {
    const members = [
        {
            name : "Dunkwu Alexander",
            set  : "1999/20",
            profession : "Software Developer",
            mobile : "081034293963",
            city : "Lagos"
        },
        {
            name : "Dunkwu Alexander",
            set  : "1999/20",
            profession : "Software Developer",
            mobile : "081034293963",
            city : "Lagos"
        },
        {
            name : "Dunkwu Alexander",
            set  : "1999/20",
            profession : "Software Developer",
            mobile : "081034293963",
            city : "Lagos"
        },
        {
            name : "Dunkwu Alexander",
            set  : "1999/20",
            profession : "Software Developer",
            mobile : "081034293963",
            city : "Lagos"
        },
        {
            name : "Dunkwu Alexander",
            set  : "1999/20",
            profession : "Software Developer",
            mobile : "081034293963",
            city : "Lagos"
        },
        {
            name : "Dunkwu Alexander",
            set  : "1999/20",
            profession : "Software Developer",
            mobile : "081034293963",
            city : "Lagos"
        },
        {
            name : "Dunkwu Alexander",
            set  : "1999/20",
            profession : "Software Developer",
            mobile : "081034293963",
            city : "Lagos"
        },
        {
            name : "Dunkwu Alexander",
            set  : "1999/20",
            profession : "Software Developer",
            mobile : "081034293963",
            city : "Lagos"
        },
        {
            name : "Dunkwu Alexander",
            set  : "1999/20",
            profession : "Software Developer",
            mobile : "081034293963",
            city : "Lagos"
        }
    ]
    const profession = [
        "Programmer",
        "Civil Engineer",
        "UI/UX Designer",
        "Accountant",
        "Farmer",
        "Data Analyst",
        "Programmer",
        "Civil Engineer",
        "UI/UX Designer",
        "Accountant",
        "Farmer",
        "Data Analyst",
        "Civil Engineer",
        "UI/UX Designer",
        "Accountant",
        "Farmer",
        "Data Analyst",
    ]
    const [set, setSet] = React.useState([])
    React.useEffect(()=> {
        for(let x = 2021; x > 1985; x--){
            setSet(prev => ([...prev, x.toString()]))
        }
    }, []);

  return (
    <div className="bg-yellow-200 min-h-screen">
        <IndexNavbar/>
        <PageHeader
        title={"Members Directory"}
        />
        <div className="mt-16">
            <p className="text-center text-2xl md:text-3xl font-[montserrat]">Now we have <span className="text-pry font-bold">1292</span> members</p>
        </div>

        <div className="md:flex justify-center gap-4 space-y-6 md:space-y-0">
            <div className="text-center font-nunito md:py-8">
                <input className="p-4 border-0 w-[25rem]" 
                placeholder="Search By Name" 
                type={'text'}/>
                <button 
                className="p-4 bg-pry text-[white]"
                >Search</button>
            </div>
            <div className="text-center text-[white] space-x-4 font-nunito md:py-8">
                <select placeholder={'filter by set'} className="p-4 px-8 border-0 bg-pry">
                    <option className="text-[white]" disabled selected>Filter By Set</option>
                    <option className="text-[white]">All Set</option>
                    {
                        set.map(set => (
                            <option key={set} className="text-[white]">{set}</option>
                        ))
                    }
                </select>
                <select placeholder={'filter by profession'} className="p-4 px-8 border-0 bg-pry">
                    <option className="text-[white]" disabled selected>Filter By Profession</option>
                    <option className="text-[white]">All Profession</option>
                    {
                        profession.map(set => (
                            <option key={set} className="text-[white]">{set}</option>
                        ))
                    }
                </select>
            </div>
        </div>

        <div className="overflow-x-auto font-nunito relative py-10 px-5 md:px-24">
    <table className="w-full text-lg text-center text-left ">
        <thead className="bg-pry text-[white]">
            <tr>
                <th scope="col" className="py-6 px-6 border-r">
                   Member Name
                </th>
                <th scope="col" className="py-6 px-6 border-r">
                    Set
                </th>
                <th scope="col" className="py-6 px-6 border-r">
                    Mobile
                </th>
                <th scope="col" className="py-6 px-6 border-r">
                    Profession
                </th>
                <th scope="col" className="py-6 px-6 ">
                    City
                </th>
            </tr>
        </thead>
        <tbody>
            {
                members.map(({city, name, mobile, profession, set}, index) => (
                    <tr key={index} className="bg-white py- border-b dark:bg-gray-800 dark:border-gray-700 text-lg">
                    <th scope="row" className="py-6 px-6 font-medium bg-[#c5b2dd] whitespace-nowrap dark:text-white">
                        {name}
                    </th>
                    <td className="py-6 px-6">
                       {set}
                    </td>
                    <td className="py-6 bg-[#c5b2dd] px-6">
                      <a href={`tel:${mobile}`} className="underline">
                         {mobile}
                      </a>
                    </td>
                    <td className="py-6 px-6">
                        {profession}
                    </td>
                    <td className="py-6 bg-[#c5b2dd] px-6">
                        {city}
                    </td>
                </tr>
                ))
            }
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Index