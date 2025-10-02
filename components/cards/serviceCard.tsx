interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
    return (
        <div className="group bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
            <div className="aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <h3
                    className="text-xl font-bold mb-2 transition-colors"
                    style={{ color: "#00A5D4" }}
                >
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
