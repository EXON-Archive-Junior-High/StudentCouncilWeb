type MemberProps = {
    name: string;
    position: string;
}

export default function Nav({name, position}: MemberProps) {
    return (
        <div id="card" className="bg-gray-800 px-4 py-2.5 m-2 rounded">
            <h1 className="text-white-theme text-2xl font-bold">{name}</h1>
            <p className="text-white-theme text-l pt-1">{position}</p>
        </div>
    )
}
