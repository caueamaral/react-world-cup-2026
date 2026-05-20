import { useState } from "react"

import { TeamsForm } from "./TeamsForm"
import { TeamsList } from "./TeamsList"

type Team = {
    id: string,
    name: string
}

export function Main() {
    const [teams, setTeams] = useState<Team[]>([])

    return (
        <main className="my-10">
            <TeamsForm
                teams={teams}
                setTeams={setTeams}
            />
            <TeamsList
                teams={teams}
                setTeams={setTeams}
            />
        </main>
    )
}