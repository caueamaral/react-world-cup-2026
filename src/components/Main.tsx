import { useEffect, useState } from "react"

import { TeamsForm } from "./TeamsForm"
import { TeamsList } from "./TeamsList"

type Team = {
    id: string,
    name: string
}

const TEAMS_STORAGE_KEY = 'world-cup-2026-teams'

export function Main() {
    const [teams, setTeams] = useState<Team[]>(() => {
        const savedTeams = sessionStorage.getItem(TEAMS_STORAGE_KEY)

        if (savedTeams === null) {
            return []
        }

        return JSON.parse(savedTeams)
    })

    const [inputTeam, setInputTeam] = useState<string>('')

    useEffect(() => {
        sessionStorage.setItem(TEAMS_STORAGE_KEY, JSON.stringify(teams))
    }, [teams])

    return (
        <main className="my-10">
            <TeamsForm
                teams={teams}
                setTeams={setTeams}
                inputTeam={inputTeam}
                setInputTeam={setInputTeam}
            />
            <TeamsList
                teams={teams}
                setTeams={setTeams}
            />
        </main>
    )
}