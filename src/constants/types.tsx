
namespace Types{

    /**
     * Props for ContactsComponent
     */
    export type ContactsProps = {
        title: string
    }

    export type MenuItem = {
        id: number, link: string, title: string
    }

    export type TwoButtonsProps = {
        buttons: [
            { classes: string, text: string },
            { classes: string, text: string },
        ]
    }
}

export default Types