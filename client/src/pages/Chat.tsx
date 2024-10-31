import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom";
import { Search, MessageSquare, Users, UserPlus, Settings } from "lucide-react"

export default function Component() {
  return (
    <div className="h-screen bg-white overflow-hidden">
      {/* Navigation Bar */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-200 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-indigo-950" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-indigo-950">Connextra</h1>
              <p className="text-xs text-muted-foreground">create for cloud-computing project</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/chat" 
              className="text-indigo-950 border-b-2 border-indigo-950 pb-1 font-medium"
            >
              Chat
            </Link>
            <Link 
              to="/find-friend" 
              className="text-muted-foreground hover:text-indigo-950"
            >
              Find Friend
            </Link>
            <Link 
              to="/find-group" 
              className="text-muted-foreground hover:text-indigo-950"
            >
              Find Group
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Bill Gates" />
                <AvatarFallback>BG</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Bill Gates</p>
                <p className="text-xs text-muted-foreground">Account Setting</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="w-80 border-r pt-4 pr-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Chats</h2>
              <Button variant="ghost" size="icon" className="rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
              </Button>
            </div>

            <Tabs defaultValue="direct" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="direct">Direct</TabsTrigger>
                <TabsTrigger value="groups">Groups</TabsTrigger>
                <TabsTrigger value="blocked">Blocked</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search" 
                className="pl-10"
              />
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center h-[calc(100vh-16rem)] text-center">
              <div className="w-32 h-32 border-2 border-dashed rounded-full flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">You don't have any friend.</p>
              <Link 
                to="/find-friend" 
                className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1"
              >
                <UserPlus className="w-4 h-4" />
                Let's find friend
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-4 text-gray-300">
          <div className="text-center text-muted-foreground/20">
            <div className="flex items-center gap-2 text-4xl font-bold mb-2">
              <MessageSquare className="w-10 h-10" />
              Connextra
            </div>
            <p>Select a chat to start messaging</p>
          </div>
        </div>
      </div>
    </div>
  )
}