import { useState } from "react"

type Team = {
    id: string,
    name: string
}

type TeamsFormProps = {
    teams: Team[],
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>
}

export function TeamsForm({ teams, setTeams }: TeamsFormProps ) {
    const [inputTeam, setInputTeam] = useState<string>('')

    function formHandle(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setTeams(currTeams => [
            ...currTeams,
            {
                id: crypto.randomUUID(),
                name: inputTeam
            }
        ])
        
        setInputTeam('')
    }

    return (
        <form className="flex" onSubmit={formHandle}>
            <input
                type="text"
                placeholder="Add a team..."
                className="bg-gray-300 py-4 px-4 grow rounded-l-md outline-none"
                value={inputTeam}
                onChange={e => setInputTeam(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white py-2 px-5 cursor-pointer rounded-r-md"
            >
                Add
            </button>
        </form>
    )
}