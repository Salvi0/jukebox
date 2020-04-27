import BaseCommand from "../structures/BaseCommand";
import Jukebox from "../structures/Jukebox";
import { IMessage } from "../../typings";
import { MessageEmbed } from "discord.js";

export default class VolumeCommand extends BaseCommand {
    constructor(public client: Jukebox, readonly path: string) {
        super(client, path, {}, {
            name: "queue",
            description: "Show the current queue",
            usage: "{prefix}queue"
        });
    }
    public execute(message: IMessage): any {
        if (!message.guild!.queue) return message.channel.send(new MessageEmbed().setDescription("There is nothing playing.").setColor("#FFFF00"));
        else message.channel.send(new MessageEmbed()
            .setTitle("**Song queue**")
            .setColor("#00FF00")
            .setDescription(message.guild!.queue.songs.map(s => `- **${s.title}**`).join("\n")));
    }
}