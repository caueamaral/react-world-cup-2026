type Team = {
    id: string,
    name: string
}

type TeamsProps = {
    teams: Team[],
    setTeams: React.Dispatch<React.SetStateAction<Team[]>>
}

export function TeamsList({ teams, setTeams }: TeamsProps) {
    function deleteHandle(id: string) {
        setTeams(curr => curr.filter(team => team.id !== id))
    }

    return (
        <ul className="flex flex-col mt-20 gap-5">
            {
                teams.map(team => (
                    <li
                        key={team.id}
                        className="bg-gray-200 flex justify-between py-3 px-4 rounded-md"
                    >
                        <span>
                            {team.name}
                        </span>
                        <button
                            type="button"
                            aria-label={`Delete ${team.name}`}
                            className="text-red-600 cursor-pointer"
                            onClick={() => deleteHandle(team.id)}
                        >
                            ×
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}