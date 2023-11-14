import { HeaderComponent } from "./HeaderComponent";
import { ContentComponent } from "./ContentComponent";
import { FooterComponent } from "./FooterComponent";

// Stateless, Dummy Component
export default function ContainerComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}