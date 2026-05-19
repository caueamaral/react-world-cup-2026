import { TeamsForm } from "./TeamsForm"
import { TeamsList } from "./TeamsList"

export function Main() {
    return (
        <main className="my-10">
            <TeamsForm />
            <TeamsList />
        </main>
    )
}