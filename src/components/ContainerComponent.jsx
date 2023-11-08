import { HeaderComponent } from "./HeaderComponent";
import { ContentComponent } from "./ContentComponent";
import { FooterComponent } from "./FooterComponent";

export default function ContainerComponent() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}