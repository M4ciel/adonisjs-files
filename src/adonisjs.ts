export type AdonisFile = {
    fileName: string;
    filePath: string;
    fileType: FileType;
};

export enum FileType {
    command = "commands",
    controller = "Controllers\\Http",
    enum = "Enum",
    exceptions = "Exceptions",
    factories = "database\\factories",
    listener = "Listener",
    middleware = "",
    migrations = "database\\migrations",
    models = "Models",
    preload = "prldfile",
    provider = "Provider",
    seeders = "database\\seeders",
    service = "Services",
    suite = "Suite",
    test = "Test",
    validator = "Validator",
    view = "View",
}
