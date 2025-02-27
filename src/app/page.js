import ChatAnimation from '../components/ChatAnimation';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
            <div className="relative" style={{margin: "30px"}}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-accent/5 rounded-2xl transform -rotate-6"></div>
              <div className="relative animate-float" style={{ animationDelay: '-2s' }}>
                <ChatAnimation />
              </div>
            </div>
          </div>
  );
}